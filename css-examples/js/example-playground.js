(function() {
  var playgroundUrl = 'playground.html';

  function decodeCodeBlock(codeEl) {
    return (codeEl.textContent || '').replace(/\u00a0/g, ' ').trim();
  }

  function indentLines(text, spaces) {
    var pad = ' '.repeat(spaces);
    return text
      .replace(/\r\n/g, '\n')
      .split('\n')
      .map(function(line) {
        return line.trim() ? pad + line.replace(/\s+$/g, '') : '';
      })
      .join('\n');
  }

  function getExampleBaseHref() {
    return new URL('.', window.location.href).href;
  }

  function getStylesheetLinks() {
    return Array.prototype.map.call(document.querySelectorAll('link[rel~="stylesheet"][href]'), function(link) {
      return '    <link rel="stylesheet" href="' + new URL(link.getAttribute('href'), window.location.href).href + '">';
    });
  }

  function getInlineStyles() {
    return Array.prototype.map.call(document.querySelectorAll('style'), function(style) {
      return '    <style>\n' + indentLines(style.textContent.trim(), 8) + '\n    </style>';
    });
  }

  function getPlaygroundHeadExtras() {
    return [
      '    <base href="' + getExampleBaseHref() + '">',
      getStylesheetLinks().join('\n'),
      getInlineStyles().join('\n'),
      '    <style>',
      '        body {',
      '            max-width: 920px;',
      '            margin: 0 auto;',
      '        }',
      '    </style>'
    ].filter(Boolean).join('\n');
  }

  function injectHeadExtrasIntoFullDocument(code) {
    var extras = getPlaygroundHeadExtras();
    if (/<head[\s>]/i.test(code)) {
      return code.replace(/<head([^>]*)>/i, '<head$1>\n' + extras);
    }
    return code.replace(/<html([^>]*)>/i, '<html$1>\n<head>\n' + extras + '\n</head>');
  }

  function buildPlaygroundDocument(snippet) {
    var code = snippet.trim();
    if (/<!doctype\s+html/i.test(code) || /<html[\s>]/i.test(code)) {
      return injectHeadExtrasIntoFullDocument(code.replace(/\n*$/g, '')) + '\n';
    }

    return [
      '<!DOCTYPE html>',
      '<html lang="zh-CN">',
      '<head>',
      '    <meta charset="UTF-8">',
      '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '    <title>HTML 示例试验场</title>',
      getPlaygroundHeadExtras(),
      '</head>',
      '<body>',
      '    <div class="demo-box">',
      indentLines(code, 6),
      '    </div>',
      '</body>',
      '</html>'
    ].join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
  }

  function openSnippetInPlayground(codeEl) {
    var snippet = decodeCodeBlock(codeEl);
    if (!snippet) return;
    try {
      localStorage.setItem('playground_code', buildPlaygroundDocument(snippet));
    } catch (err) {}
    window.open(playgroundUrl, '_blank');
  }

  function enhanceCodeBlocks() {
    var blocks = document.querySelectorAll('pre > code');
    blocks.forEach(function(codeEl, index) {
      var pre = codeEl.parentElement;
      if (!pre || pre.dataset.playgroundReady === 'true') return;

      var wrapper = document.createElement('div');
      wrapper.className = 'code-example';

      var toolbar = document.createElement('div');
      toolbar.className = 'code-toolbar';

      var label = document.createElement('span');
      label.className = 'code-toolbar-title';
      label.textContent = '示例代码 ' + String(index + 1).padStart(2, '0');

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'playground-inline-btn';
      button.textContent = '打开试验场';
      button.addEventListener('click', function() {
        openSnippetInPlayground(codeEl);
      });

      toolbar.appendChild(label);
      toolbar.appendChild(button);
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(toolbar);
      wrapper.appendChild(pre);
      pre.dataset.playgroundReady = 'true';
    });
  }

  window.openCodeInPlayground = function(codeEl) {
    openSnippetInPlayground(codeEl);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceCodeBlocks);
  } else {
    enhanceCodeBlocks();
  }
})();
