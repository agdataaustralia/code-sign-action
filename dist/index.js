module.exports=function(e,t){"use strict";var n={};function __webpack_require__(t){if(n[t]){return n[t].exports}var r=n[t]={i:t,l:false,exports:{}};e[t].call(r.exports,r,r.exports,__webpack_require__);r.l=true;return r.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(526)}return startup()}({87:function(e){e.exports=require("os")},129:function(e){e.exports=require("child_process")},211:function(e){e.exports=require("https")},431:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});const r=n(87);function issueCommand(e,t,n){const o=new Command(e,t,n);process.stdout.write(o.toString()+r.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const o="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=o+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";for(const t in this.properties){if(this.properties.hasOwnProperty(t)){const n=this.properties[t];if(n){e+=`${t}=${escape(`${n||""}`)},`}}}}e+=o;const t=`${this.message||""}`;e+=escapeData(t);return e}}function escapeData(e){return e.replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escape(e){return e.replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/]/g,"%5D").replace(/;/g,"%3B")}},470:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(r.next(e))}catch(e){o(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const o=n(431);const i=n(87);const s=n(622);var u;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(u=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){process.env[e]=t;o.issueCommand("set-env",{name:e},t)}t.exportVariable=exportVariable;function setSecret(e){o.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){o.issueCommand("add-path",{},e);process.env["PATH"]=`${e}${s.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}return n.trim()}t.getInput=getInput;function setOutput(e,t){o.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setFailed(e){process.exitCode=u.Failure;error(e)}t.setFailed=setFailed;function debug(e){o.issueCommand("debug",{},e)}t.debug=debug;function error(e){o.issue("error",e)}t.error=error;function warning(e){o.issue("warning",e)}t.warning=warning;function info(e){process.stdout.write(e+i.EOL)}t.info=info;function startGroup(e){o.issue("group",e)}t.startGroup=startGroup;function endGroup(){o.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return r(this,void 0,void 0,function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n})}t.group=group;function saveState(e,t){o.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},526:function(e,t,n){"use strict";var r=this&&this.__await||function(e){return this instanceof r?(this.v=e,this):new r(e)};var o=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof __values==="function"?__values(e):e[Symbol.iterator](),n={},verb("next"),verb("throw"),verb("return"),n[Symbol.asyncIterator]=function(){return this},n);function verb(t){n[t]=e[t]&&function(n){return new Promise(function(r,o){n=e[t](n),settle(r,o,n.done,n.value)})}}function settle(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}};var i=this&&this.__asyncDelegator||function(e){var t,n;return t={},verb("next"),verb("throw",function(e){throw e}),verb("return"),t[Symbol.iterator]=function(){return this},t;function verb(o,i){t[o]=e[o]?function(t){return(n=!n)?{value:r(e[o](t)),done:o==="return"}:i?i(t):t}:i}};var s=this&&this.__asyncGenerator||function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(e,t||[]),i,s=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(e){if(o[e])i[e]=function(t){return new Promise(function(n,r){s.push([e,t,n,r])>1||resume(e,t)})}}function resume(e,t){try{step(o[e](t))}catch(e){settle(s[0][3],e)}}function step(e){e.value instanceof r?Promise.resolve(e.value.v).then(fulfill,reject):settle(s[0][2],e)}function fulfill(e){resume("next",e)}function reject(e){resume("throw",e)}function settle(e,t){if(e(t),s.shift(),s.length)resume(s[0][0],s[0][1])}};var u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};var c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:true});const a=u(n(470));const l=n(747);const f=n(747);const p=c(n(211));const d=c(n(622));const g=c(n(669));const m=n(129);const h=n(765);const v=g.default.promisify(m.exec);const y=h.env["TEMP"]+"\\certificate.pfx";const w=h.env["TEMP"]+"\\nuget.exe";const _="http://timestamp.digicert.com";const b="C:/Program Files (x86)/Windows Kits/10/bin/10.0.17763.0/x86/signtool.exe";const x=[".dll",".exe",".sys",".vxd",".msix",".msixbundle",".appx",".appxbundle",".msi",".msp",".msm",".cab",".ps1",".psm1"];function sleep(e){if(e>0)console.log(`Waiting for ${e} seconds.`);return new Promise(t=>setTimeout(t,e*1e3))}async function createCertificatePfx(){const e=a.getInput("certificate");const t=Buffer.from(e,"base64");if(t.length==0){console.log('The value for "certificate" is not set.');return false}console.log(`Writing ${t.length} bytes to ${y}.`);await l.promises.writeFile(y,t);return true}async function downloadNuGet(){return new Promise(e=>{if(f.existsSync(w)){e();return}console.log(`Downloading nuget.exe.`);const t=f.createWriteStream(w);p.default.get("https://dist.nuget.org/win-x86-commandline/latest/nuget.exe",n=>{n.pipe(t);t.on("finish",function(){t.close();e()})})})}async function signWithSigntool(e,t){try{let n=`"${b}" sign /f ${y} /tr ${_} /td sha256 /fd sha256 ${e}`;if(t){n+="/p "+t}const{stdout:r}=await v(n);console.log(r);return true}catch(e){console.log(e.stdout);console.log(e.stderr);return false}}async function signNupkg(e){await downloadNuGet();try{const{stdout:t}=await v(`"${w}" sign ${e} -CertificatePath ${y} -Timestamper ${_}`);console.log(t);return true}catch(e){console.log(e.stdout);console.log(e.stderr);return false}}async function trySignFile(e,t){console.log(`Signing ${e}.`);const n=d.default.extname(e);for(let r=0;r<10;r++){await sleep(r);if(x.includes(n)){if(await signWithSigntool(e,t))return}else if(n==".nupkg"){if(await signNupkg(e))return}}throw`Failed to sign '${e}'.`}function getFiles(e,t){return s(this,arguments,function*getFiles_1(){const n=yield r(l.promises.readdir(e));for(const s of n){const n=`${e}/${s}`;const u=yield r(l.promises.stat(n));if(u.isFile()){const e=d.default.extname(s);if(x.includes(e)||e==".nupkg")yield yield r(n)}else if(u.isDirectory()&&t){yield r(yield*i(o(getFiles(n,t))))}}})}async function signFiles(){var e,t;const n=a.getInput("password",{required:false});if(n){console.log("Files will be signed with the given password.")}const r=a.getInput("folder",{required:true});const i=a.getInput("recursive")=="true";try{for(var s=o(getFiles(r,i)),u;u=await s.next(),!u.done;){const e=u.value;await trySignFile(e,n)}}catch(t){e={error:t}}finally{try{if(u&&!u.done&&(t=s.return))await t.call(s)}finally{if(e)throw e.error}}}async function run(){try{if(await createCertificatePfx())await signFiles()}catch(e){a.setFailed(`Action failed with error: ${e}`)}}run()},622:function(e){e.exports=require("path")},669:function(e){e.exports=require("util")},747:function(e){e.exports=require("fs")},765:function(e){e.exports=require("process")}});