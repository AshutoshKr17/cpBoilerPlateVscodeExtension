const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('cp-boiler-plate.writeBoilerPlateCodeForMe', function () {
		// The code you place here will be executed every time your command is executed
		vscode.window.activeTextEditor.edit(editBuilder => {
            editBuilder.replace(new vscode.Range(0,0,1,0), 
			"#include<bits/stdc++.h>"+"\n"+
			"using namespace std;"+"\n"+
			"void solve(){"+"\n"+
			"    "+" "+"\n"+
			"}"+"\n"+
			"\n"+
			"int main(){"+"\n"+
			'    '+"int t;"+"\n"+
			"    "+"cin>>t;"+"\n"+
			"    "+"while(t--){"+"\n"+
			"         "+"solve();"+"\n"+
			"    "+"}"+"\n"+
			"    "+"return 0;"+"\n"+
			"}"
			)
		});
		//Display a message box to the user
		vscode.window.showInformationMessage('Hello World from cp Boiler Plate!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
