// This is a generated file. Please do not edit directly.
var SAMPLES = this.SAMPLES || [];
SAMPLES.push({"id":"extending-language-services-custom-languages","js":"//---------------------------------------------------\n// Extending Language Services > Custom languages\n//---------------------------------------------------\n\nmonaco.languages.register({ id: 'mySpecialLanguage' });\n\nmonaco.languages.setMonarchTokensProvider('mySpecialLanguage', {\n\ttokenizer: {\n\t\troot: [\n\t\t\t[/\\[error.*/, \"custom-error\"],\n\t\t\t[/\\[notice.*/, \"custom-notice\"],\n\t\t\t[/\\[info.*/, \"custom-info\"],\n\t\t\t[/\\[[a-zA-Z 0-9:]+\\]/, \"custom-date\"],\n\t\t]\n\t}\n});\n\nmonaco.languages.registerCompletionItemProvider('mySpecialLanguage', {\n\tprovideCompletionItems: () => {\n\t\treturn [\n\t\t\t{\n\t\t\t\tlabel: 'simpleText',\n\t\t\t\tkind: monaco.languages.CompletionItemKind.Text\n\t\t\t}, {\n\t\t\t\tlabel: 'testing',\n\t\t\t\tkind: monaco.languages.CompletionItemKind.Keyword,\n\t\t\t\tinsertText:'testing({{condition}})'\n\t\t\t},\n\t\t\t{\n\t\t\t\tlabel: 'ifelse',\n\t\t\t\tkind: monaco.languages.CompletionItemKind.Snippet,\n\t\t\t\tinsertText: [\n\t\t\t\t\t'if ({{condition}}) {',\n\t\t\t\t\t'\\t{{}}',\n\t\t\t\t\t'} else {',\n\t\t\t\t\t'\\t',\n\t\t\t\t\t'}'\n\t\t\t\t].join('\\n'),\n\t\t\t\tdocumentation: 'If-Else Statement'\n\t\t\t}\n\t\t]\n\t}\n});\n\nmonaco.editor.create(document.getElementById(\"container\"), {\n\tvalue: getCode(),\n\tlanguage: 'mySpecialLanguage'\n});\n\nfunction getCode() {\n\treturn [\n\t\t'[Sun Mar 7 16:02:00 2004] [notice] Apache/1.3.29 (Unix) configured -- resuming normal operations',\n\t\t'[Sun Mar 7 16:02:00 2004] [info] Server built: Feb 27 2004 13:56:37',\n\t\t'[Sun Mar 7 16:02:00 2004] [notice] Accept mutex: sysvsem (Default: sysvsem)',\n\t\t'[Sun Mar 7 16:05:49 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 16:45:56 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 17:13:50 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 17:21:44 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 17:23:53 2004] statistics: Use of uninitialized value in concatenation (.) or string at /home/httpd/twiki/lib/TWiki.pm line 528.',\n\t\t'[Sun Mar 7 17:23:53 2004] statistics: Can\\'t create file /home/httpd/twiki/data/Main/WebStatistics.txt - Permission denied',\n\t\t'[Sun Mar 7 17:27:37 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 17:31:39 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 17:58:00 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 18:00:09 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 18:10:09 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 18:19:01 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 18:42:29 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 18:52:30 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 18:58:52 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 19:03:58 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 19:08:55 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 20:04:35 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 20:11:33 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 20:12:55 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 20:25:31 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 20:44:48 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 20:58:27 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 21:16:17 2004] [error] [client xx.xx.xx.xx] File does not exist: /home/httpd/twiki/view/Main/WebHome',\n\t\t'[Sun Mar 7 21:20:14 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 21:31:12 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 21:39:55 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Sun Mar 7 21:44:10 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 01:35:13 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 01:47:06 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 01:59:13 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 02:12:24 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 02:54:54 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 03:46:27 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 03:48:18 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 03:52:17 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 03:55:09 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 04:22:55 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 04:24:47 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 04:40:32 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 04:55:40 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 04:59:13 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 05:22:57 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 05:24:29 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'[Mon Mar 8 05:31:47 2004] [info] [client xx.xx.xx.xx] (104)Connection reset by peer: client stopped connection before send body completed',\n\t\t'<11>httpd[31628]: [error] [client xx.xx.xx.xx] File does not exist: /usr/local/installed/apache/htdocs/squirrelmail/_vti_inf.html in 29-Mar 15:18:20.50 from xx.xx.xx.xx',\n\t\t'<11>httpd[25859]: [error] [client xx.xx.xx.xx] File does not exist: /usr/local/installed/apache/htdocs/squirrelmail/_vti_bin/shtml.exe/_vti_rpc in 29-Mar 15:18:20.54 from xx.xx.xx.xx',\n\t].join('\\n');;\n}\n","html":"<div id=\"container\" style=\"height:100%;\"></div>\n","css":".monaco-editor .token.custom-info {\n\tcolor: grey;\n}\n.monaco-editor .token.custom-error {\n\tcolor: red;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n}\n.monaco-editor .token.custom-notice {\n\tcolor: orange;\n}\n\n.monaco-editor .token.custom-date {\n\tcolor: green;\n}\n"});