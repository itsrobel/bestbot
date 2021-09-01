// If your extension doesn't need a background script, just leave this file empty
/*global chrome*/
import io from "socket.io-client";

let socket = io.connect("http://localhost:5000")

socket.on("hello" , (data) => 
{
  console.log(data)
})

socket.on("run_puppet" ,(data) => 
{
  chrome.tabs.create({'url' :'localhost:5000'})
  console.log(data)
  
  // chrome.tabs.executeScript(tab.id, {code: "alert(document.querySelector('body'));"});
})
// This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig

messageInBackground();
export function messageInBackground() {
  console.log('I can run your javascript like any other code in your project');
  console.log('just do not forget, I cannot render anything !');
}
