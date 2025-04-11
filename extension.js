const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('vscode-llm-assistant.helloWorld', function () {
        vscode.window.showInformationMessage('Hello from your AI Copilot Extension!');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
