import React from 'react';

const KNOWN_COMMANDS = new Set([
  'sudo', 'pwd', 'ls', 'cd', 'find', 'grep', 'chmod', 'chown', 'umask',
  'apt', 'apt-get', 'apt-cache', 'ps', 'top', 'htop', 'systemctl', 'journalctl',
  'lsof', 'ip', 'ss', 'netstat', 'ping', 'dig', 'curl', 'wget', 'ssh',
  'scp', 'rsync', 'sha256sum', 'md5sum', 'sha1sum', 'tmux', 'docker',
  'script', 'date', 'uname', 'printf', 'export', 'exit', 'cat', 'echo',
  'head', 'tail', 'sort', 'uniq', 'wc', 'awk', 'sed', 'cut', 'tr',
  'tee', 'gzip', 'tar', 'which', 'id', 'whoami', 'crontab', 'dmesg',
  'udevadm', 'blockdev', 'findmnt', 'ddrescue', 'dd', 'mmls', 'fsstat',
  'fls', 'istat', 'icat', 'sorter', 'losetup', 'mount', 'umount',
  'fdisk', 'xxd', 'strings', 'exiftool', 'volatility', 'vol', 'wireshark',
  'tshark', 'tcpdump', 'clear', 'man', 'history', 'grep'
]);

const OPERATORS = new Set(['|', '&&', '||', ';', '>', '>>', '<', '2>/dev/null', '2>&1', '\\']);

/**
 * Tokenizes and styles a single line of Bash / shell script.
 * Applies bold and vibrant colors to command names, flags, arguments,
 * strings, operators, and comments for both Day and Night modes.
 */
function renderLine(line: string, lineIdx: number): React.ReactNode {
  if (!line.trim()) {
    return <span key={lineIdx}>{'\n'}</span>;
  }

  // Check for comment
  let codePart = line;
  let commentPart = '';

  const commentIndex = line.indexOf('#');
  if (commentIndex !== -1) {
    // Ensure '#' is not inside a string
    const beforeHash = line.slice(0, commentIndex);
    const singleQuotes = (beforeHash.match(/'/g) || []).length;
    const doubleQuotes = (beforeHash.match(/"/g) || []).length;
    if (singleQuotes % 2 === 0 && doubleQuotes % 2 === 0) {
      codePart = line.slice(0, commentIndex);
      commentPart = line.slice(commentIndex);
    }
  }

  // Tokenize codePart
  const tokenRegex = /("[^"]*"|'[^']*'|\$[a-zA-Z0-9_]+|--[a-zA-Z0-9_\-]+|-[a-zA-Z0-9]+|2>\/dev\/null|2>&1|\|\||&&|[|><;=\\]|\s+|[^\s"'$|><;=\\]+)/g;
  const tokens = codePart.match(tokenRegex) || [codePart];

  let expectCommand = true;

  const renderedTokens = tokens.map((token, tIdx) => {
    // Preserved whitespace
    if (/^\s+$/.test(token)) {
      return token;
    }

    // Quoted strings
    if ((token.startsWith('"') && token.endsWith('"')) || (token.startsWith("'") && token.endsWith("'"))) {
      expectCommand = false;
      return (
        <span key={tIdx} className="text-emerald-700 dark:text-emerald-400 font-medium">
          {token}
        </span>
      );
    }

    // Variables: $USER, $TZ
    if (token.startsWith('$')) {
      expectCommand = false;
      return (
        <span key={tIdx} className="font-semibold text-purple-700 dark:text-purple-300">
          {token}
        </span>
      );
    }

    // Operators: |, &&, ||, ;, >, >>, 2>/dev/null
    if (OPERATORS.has(token)) {
      if (token === '|' || token === '&&' || token === ';' || token === '||') {
        expectCommand = true;
      }
      return (
        <span key={tIdx} className="font-bold text-pink-700 dark:text-pink-400">
          {token}
        </span>
      );
    }

    // Flags: -la, --mount, -type, -p
    if (/^--?[a-zA-Z0-9]/.test(token)) {
      expectCommand = false;
      return (
        <span key={tIdx} className="font-semibold text-amber-700 dark:text-amber-300">
          {token}
        </span>
      );
    }

    // Command names: bold and highlighted
    const lower = token.toLowerCase();
    if (expectCommand || KNOWN_COMMANDS.has(lower)) {
      expectCommand = false;
      return (
        <span key={tIdx} className="font-extrabold text-cyan-800 dark:text-cyan-300 drop-shadow-xs">
          {token}
        </span>
      );
    }

    // File paths or IP addresses
    if (token.includes('/') || /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(token)) {
      return (
        <span key={tIdx} className="text-sky-700 dark:text-sky-300">
          {token}
        </span>
      );
    }

    // Numeric constants (e.g. chmod 640, 2222, 10M)
    if (/^\d+[a-zA-Z]?$/.test(token)) {
      return (
        <span key={tIdx} className="text-orange-700 dark:text-orange-400 font-medium">
          {token}
        </span>
      );
    }

    return (
      <span key={tIdx} className="text-slate-800 dark:text-slate-200">
        {token}
      </span>
    );
  });

  return (
    <span key={lineIdx} className="block leading-relaxed">
      {renderedTokens}
      {commentPart && (
        <span className="text-slate-500 dark:text-slate-400 italic ml-1">
          {commentPart}
        </span>
      )}
    </span>
  );
}

export const highlightBash = (code: string): React.ReactNode => {
  const lines = code.split('\n');
  return lines.map((line, idx) => renderLine(line, idx));
};
