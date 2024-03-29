const vlib=require("@vandenberghinc/vlib");
class Theme{
constructor({
font='"Inter", "Helvetica", sans-serif',
code_font="'Menlo', 'Consolas', monospace",
fg="#FFFFFF",
sub_fg="#95979D",
tint_fg="#5795F3",
tint_base=null,
codeblock_fg="#FFFFFF",
codeline_fg="#FFFFFF",
anchor_fg=null,
bg="#05030C",
bg_brightness=100,
bg_blur=0,
topbar_bg="#05030C80",
topbar_blur=8,
sidebar_bg="#05030C",
widget_bg="#0D0D16",
warning_bg="#F45D5D",
note_bg="#5795F3",
codeblock_bg=null,
codeline_bg=null,
divider_bg="#FFFFFF10",
hover_brightness=0.85,
click_brightness=0.75,
token_comment="#818C97",
token_comment_keyword="#818C97",
token_comment_codeblock="#818C97",
token_string="#D6C986",
token_numeric="#D6C986",
token_keyword="#EE8378",
token_operator="#EE8378",
token_preprocessor="#EE8378",
token_type_def="#C78BF0",
token_type="#5795F3",
token_parameter="#F9AE58",
tag_required="#F45D5D",
tag_property="#F9AE58",
tag_member="#009051",
tag_keyword="#EE8378",
tag_experimental="#5795F3",
tag_advised="#5795F3",
tag_deprecated="#F45D5D",
tag_success="#53AC7D",
tag_error="#F45D5D",
method_get="#53AC7D",
method_post="#5795F3",
method_put="#F9AE58",
method_patch="#C78BF0",
method_delete="#F45D5D",
method_head=null,
method_options=null,
method_connect=null,
method_trace=null,
method_copy=null,
method_move=null,
method_lock=null,
method_propfind=null,
method_proppatch=null,
method_mkcol=null,
method_report=null,
method_mkactivity=null,
method_checkout=null,
method_merge=null,
}={}){
this.font=font;
this.code_font=code_font;
this.fg=fg;
this.sub_fg=sub_fg;
this.tint_fg=tint_fg;
this.tint_base=tint_base;
this.codeblock_fg=codeblock_fg;
this.codeline_fg=codeline_fg;
this.anchor_fg=anchor_fg;
this.bg=bg;
this.bg_brightness=bg_brightness;
this.bg_blur=bg_blur;
this.topbar_bg=topbar_bg;
this.topbar_blur=topbar_blur;
this.sidebar_bg=sidebar_bg;
this.widget_bg=widget_bg;
this.warning_bg=warning_bg;
this.note_bg=note_bg;
this.divider_bg=divider_bg;
this.codeblock_bg=codeblock_bg;
this.codeline_bg=codeline_bg;
this.token_comment=token_comment;
this.token_comment_keyword=token_comment_keyword;
this.token_comment_codeblock=token_comment_codeblock;
this.token_string=token_string;
this.token_numeric=token_numeric;
this.token_keyword=token_keyword;
this.token_operator=token_operator;
this.token_preprocessor=token_preprocessor;
this.token_type_def=token_type_def;
this.token_type=token_type;
this.token_parameter=token_parameter;
this.tag_required=tag_required;
this.tag_property=tag_property;
this.tag_member=tag_member;
this.tag_keyword=tag_keyword;
this.tag_experimental=tag_experimental;
this.tag_advised=tag_advised;
this.tag_deprecated=tag_deprecated;
this.tag_success=tag_success;
this.tag_error=tag_error;
this.hover_brightness=hover_brightness;
this.click_brightness=click_brightness;
this.method_get=method_get;
this.method_post=method_post;
this.method_put=method_put;
this.method_patch=method_patch;
this.method_delete=method_delete;
this.method_head=method_head;
this.method_options=method_options;
this.method_connect=method_connect;
this.method_trace=method_trace;
this.method_copy=method_copy;
this.method_move=method_move;
this.method_lock=method_lock;
this.method_propfind=method_propfind;
this.method_proppatch=method_proppatch;
this.method_mkcol=method_mkcol;
this.method_report=method_report;
this.method_mkactivity=method_mkactivity;
this.method_checkout=method_checkout;
this.method_merge=method_merge;
}
}
const LIGHT_THEME=new Theme({
fg:"#3D454D",
sub_fg:"#64708B",
tint_fg:"#5795F3",
codeblock_fg:"#3D454D",
codeline_fg:"#3D454D",
bg:"#FFFFFF",
topbar_bg:"#FFFFFF80",
sidebar_bg:"#FFFFFF",
widget_bg:"#F5F7F9",
warning_bg:"#FF9E93",
note_bg:"#7BA8F3",
codeline_bg:"#EDF1F4",
divider_bg:"#EDF0F3",
token_string:"#C7B738",
token_numeric:"#C7B738",
hover_brightness:0.975,
click_brightness:0.975,
});
const DARK_THEME=new Theme({
tint_fg:"#5795F3",
bg:"#05030C",
topbar_bg:"#05030C80",
sidebar_bg:"#05030C",
widget_bg:"#0D0D16",
note_bg:"#6A91D3",
codeline_bg:"#212938",
divider_bg:"#FFFFFF15",
hover_brightness:1.2,
click_brightness:1.25,
});
const BLUE_THEME=new Theme({
tint_fg:"#5795F3",
note_bg:"#5795F3",
bg:"#202133",
topbar_bg:"#20213380",
topbar_blur:5,
sidebar_bg:"#202133",
widget_bg:"#25273D",
divider_bg:"#FFFFFF10",
hover_brightness:1.3,
click_brightness:1.4,
});
const GREEN_THEME=new Theme({
tint_fg:"#58B684",
anchor_fg:"#53AC7D",
token_type:"#58B684",
method_get:"#58B684",
note_bg:"#58B684",
bg:"#102328",
topbar_bg:"#10232880",
topbar_blur:5,
sidebar_bg:"#102328",
widget_bg:"#17292D",
divider_bg:"#FFFFFF10",
hover_brightness:1.3,
click_brightness:1.4,
});
class Meta{
constructor({
author=null,
title=null,
description=null,
image=null,
robots="index, follow",
charset="UTF-8",
viewport="width=device-width, initial-scale=1",
favicon="/favicon.ico",
info="X",
}={}){
this.author=author;
this.title=title;
this.description=description;
this.image=image;
this.robots=robots;
this.charset=charset;
this.viewport=viewport;
this.favicon=favicon;
}
}
const Markdown={
parse:function(code,path="<anonymous>"){
const is_escaped_wrapper=(index)=>{
if (code.charAt(index-1)=="\\"){
if (code.charAt(index-2)=="\\"){
return is_escaped_wrapper(index-2);
}
return true;
}
return false;
}
const find_next=(char,start,allow_escaped=true,def=null)=>{
if (start==null){return def;}
for (let i=start;i<code.length;i++){
const c=code.charAt(i);
if (c==char&&(allow_escaped||!is_escaped_wrapper(i))){
return i;
}
}
return def;
}
let included_code="";
for (let index=0;index<code.length;index++){
if (code.charAt(index)==="["&&is_escaped_wrapper(index)===false){
const opening_bracket=index;
const closing_bracket=find_next("]",index, false, null);
if (closing_bracket!=null){
const bracket_data=code.substr(opening_bracket+1,closing_bracket-(opening_bracket+1));
if (bracket_data.eq_first("include:")){
let include_path=bracket_data.substr(8).trim();
if (path!==null){
include_path=include_path.replaceAll("$__dirname",path.base().str());
}
const source=new vlib.Path(include_path);
if (source.exists()===false){
throw Error(`${path.str()}: Markdown include file "${source.str()}" does not exist.`);
}
included_code+=this.parse(source.load_sync(),source);
index=closing_bracket;
continue;
}
}
}
included_code+=code.charAt(index);
}
return included_code;
},
}
class Config{
constructor({
name="Libris",
version="1.1",
versions=null,
icon=null,
meta=new Meta(),
dark_theme=DARK_THEME,
light_theme=LIGHT_THEME,
default_theme="dark_theme",
include={},
exclude=[],
extra_files=[],
navigation_order=[],
chapter_order=[],
title_order=[],
templates={},
sidebar_images={},
actions={},
socials={},
headless=false,
enforce_navigations=false,
sort_alphabetical=true,
allow_save_on_system_error=true,
tab_size=4,
include_links=[],
include_scripts=[],
output=null,
config_path="<anonymous config>",
}){
vlib.utils.verify_params({params:arguments[0],check_unknown:true,error_prefix:`${config_path.toString()}: `,info:{
name:"string",
version:"string",
versions:{type:"object", default:null},
icon:{type:["string","object"], default:null},
meta:{type:"object", default:new Meta()},
dark_theme:{type:"object", default:DARK_THEME},
light_theme:{type:"object", default:LIGHT_THEME},
default_theme:{type:"string", default:"dark_theme"},
include:{type:["array","object"], default:[]},
exclude:{type:"array", default:[]},
extra_files:{type:"array", default:[]},
navigation_order:{type:"array", default:[]},
chapter_order:{type:["array","object"], default:[]},
title_order:{type:["array","object"], default:[]},
templates:{type:"object", default:{}},
sidebar_images:{type:"object", default:{}},
actions:{type:"object", default:{}},
socials:{type:"object", default:{}},
headless:{type:"boolean", default:false},
enforce_navigations:{type:"boolean", default:false},
sort_alphabetical:{type:"boolean", default:true},
allow_save_on_system_error:{type:"boolean", default:true},
tab_size:{type:"number", default:4},
include_links:{type:"array", default:[]},
include_scripts:{type:"array", default:[]},
output:{type:["string","array"], default:null},
config_path:{type:"string", default:"<anonymous config>"},
}});
if (default_theme!=="light_theme"&&default_theme!=="dark_theme"){
throw Error(`${this.config_path.str()}: Invalid value for parameter "default_theme", the valid values are "light_theme" or "dark_theme".`);
}
this.name=name;
this.version=version;
this.versions=versions;
this.icon=icon==null?"":icon;
this.meta=meta;
this.dark_theme=dark_theme;
this.light_theme=light_theme;
this.default_theme=default_theme;
this.headless=headless;
this.include_links=include_links;
this.include_scripts=include_scripts;
this.tab_size=tab_size;
this.config_path=new vlib.Path(config_path);
this.enforce_navigations=enforce_navigations;
this.navigation_order=navigation_order;
this.chapter_order=chapter_order;
this.title_order=title_order;
this.templates=templates;
this.template_keys=Object.keys(templates);
this.actions=actions;
this.socials=socials;
this.sidebar_images=sidebar_images;
this.allow_save_on_system_error=allow_save_on_system_error;
this.sort_alphabetical=sort_alphabetical;
this.output=output;
this.light_theme.tab_size=this.tab_size;
this.dark_theme.tab_size=this.tab_size;
const resolve_path=(path)=>{
if (path instanceof vlib.Path){
path=path.str()
}
return new vlib.Path(path.replaceAll("$__dirname", this.config_path.base())).abs();
}
for (let i=0;i<exclude.length;i++){
exclude[i]=resolve_path(exclude[i]).str();
}
this.include=[];
if (Array.isArray(include)){
const include_path=(path)=>{
path=resolve_path(path);
if (path.name()===".DS_Store"){
return null;
}
else if (!path.exists()){
throw Error(`${this.config_path.str()}: Include file "${path.str()}" does not exist.`);
}
else if (exclude.includes(path.str())){
return null;
}
if (path.is_dir()){
path.paths_sync().iterate(include_path);
}else {
this.include.push({
path:path.str(),
data:path.load_sync(),
});
}
}
include.iterate((path)=>{
if (typeof path!=="string"&&(path instanceof vlib.Path)===false){
throw Error(`${this.config_path.str()}: Invalid type for include path "${path.toString()}", the valid type is "string".`);
}
include_path(path);
});
}else {
Object.keys(include).iterate((path)=>{
if (typeof path!=="string"&&(path instanceof vlib.Path)===false){
throw Error(`${this.config_path.str()}: Invalid type for include path "${path.toString()}", the valid type is "string".`);
}
this.include.push({
path:resolve_path(path).str(),
data:include[path],
})
});
}
this.extra_files=[];
let block_index=-1;
extra_files.iterate((item)=>{
++block_index;
if (item.title==null||item.title===""){
if (item.include!=null){
item.title=new vlib.Path(item.include).name(false).replaceAll("-"," ").replaceAll("_"," ").capitalize_words()
}else {
throw Error(`${this.config_path.str()}: Invalid include block (block ${block_index}), attribute "title" must be assigned with the block's title.`);
}
}
if (typeof item.markdown==="string"){
item.type="markdown"
item.markdown=Markdown.parse(item.markdown);
}
else if (typeof item.js==="string"){
item.blocks=[{
type:"JS",
data:item.js,
}]
}
else if (typeof item.html==="string"){
item.blocks=[{
type:"HTML",
data:item.html,
}]
}
else if (typeof item.include==="string"){
item.include=item.include.toString().replaceAll("$__dirname", this.config_path.base());
const path=new vlib.Path(item.include);
if (path.exists()===false){
throw Error(`${this.config_path.str()}: Invalid include block (block ${block_index}), include path "${path.str()}" does not exist.`);
}
const extension=path.extension();
if (extension===".md"){
item.markdown=Markdown.parse(path.load_sync(),path);
}
else if (extension===".js"){
item.blocks=[{
type:"JS",
data:path.load_sync(),
}]
}
else if (extension===".html"){
item.blocks=[{
type:"HTML",
data:path.load_sync(),
}]
}
else {
throw Error(`${this.config_path.str()}: Invalid include block (block ${block_index}), the include path "${path.str()}" must have a ".md" or ".html" extension.`);
}
}
this.extra_files.push(item);
});
include_links=[];
this.include_links.iterate((item)=>{
if (item.rel==="preconnect"&&(item.href==="https://fonts.googleapis.com"||item.href==="https://fonts.gstatic.com")){
return null;
}
include_links.append(item);
})
this.include_links=include_links;
}
static load(path){
path=new vlib.Path(path);
if (!path.exists()){
throw Error(`Libris config file "${path.str()}" does not exist.`);
}
if (path.extension()===".js"){
let data=require(path.str());
if (data==null){
throw Error(`Libris config file "${path.str()}" does not export a configuration object.`);
}else if (!(data instanceof Config)){
data=new Config(data);
}
data.config_path=path.str();
return data;
}
else {
try {
let data=path.load_sync();
data=JSON.parse(data);
if (data.meta!=null){
data.meta=new Meta(data.meta);
}
if (data.dark_theme!=null){
data.dark_theme=new Theme(data.dark_theme);
}
if (data.light_theme!=null){
data.light_theme=new Theme(data.light_theme);
}
data.config_path=path.str();
return new Config(data);
}catch(err){
throw Error(`Unable to load libris config file "${path.str()}": ${err.message}`);
}
}
}
}
class Client{
static host="uselibris.io";
static port=443;
static api_key=process.env.LIBRIS_API_KEY;
constructor({
config=null,
api_key=null,
}){
if (api_key==null){
api_key=Client.api_key;
}
if (config===null||(typeof config!=="object"&&typeof config!=="string")){
throw Error(`Invalid type for parameter "config", the valid type is "Config", "object" or "string".`);
}
if (typeof api_key!=="string"){
throw Error(`Invalid type for parameter "api_key", the valid type is "string". The API key may also be defined as environment variable "LIBRIS_API_KEY".`);
}
this.api_key=api_key;
if (config instanceof Config){
this.config=config;
}else if (config!==null&&typeof config==="object"){
this.config=new Config(config);
}else if (typeof config==="string"){
this.config=Config.load(config);
}
}
async _request(method,endpoint,params,compress=false,json=true){
return new Promise(async (resolve,reject)=>{
let {error,body,status}=await vlib.request({
host:Client.host,
port:Client.port,
endpoint:endpoint,
method:method,
params:params,
compress:compress,
reject_unauthorized:Client.host==="127.0.0.1",
headers:{
"Authorization":`Bearer ${this.api_key}`,
}
});
if (error){
return reject(error);
}
if (status===401){
return reject(new Error(`Invalid API key "${this.api_key}" [${status}].`))
}
else if (status!==200){
try {body=JSON.parse(body);}catch(err){}
if (body.error){
if (body.error.charAt(body.error.length-1)==="."){
body.error=body.error.substr(0,body.error.length-1)
}
return reject(new Error(`${body.error} [${status}].`))
}
return reject(new Error(`${body} [${status}].`));
}
return resolve(json?JSON.parse(body):body);
});
}
async generate(build_html=true){
return new Promise(async (resolve,reject)=>{
let response;
try {
response=await this._request("POST","/api/docs",{config:this.config,build_html:build_html}, true);
}catch (error){
return reject(error);
}
if (build_html===false){
return resolve(response);
}
this._gen_response=response;
const html=response.html;
if (this.config.output!=null){
let outputs;
if (typeof this.config.output==="string"){
outputs=[this.config.output];
}else if (Array.isArray(this.config.output)){
outputs=this.config.output;
}else {
throw Error(`${this.config.config_path.str()}: Invalid type for config attribute "output", the valid types are "null", "string" or "array".`);
}
outputs.iterate((output)=>{
try {
console.log(`Saving the generated documentation to "${output}".`)
new vlib.Path(output).save_sync(html);
}catch (error){
return reject(new Error(`Unable to save the generated documentation to specified output path "${output}": ${error.message}.`));
}
})
}
return resolve(response);
});
}
async list_projects(){
return new Promise(async (resolve,reject)=>{
let response;
try {
response=await this._request("GET","/api/projects");
}catch (error){
return reject(error);
}
return resolve(response.projects);
});
}
async del_project(project){
return new Promise(async (resolve,reject)=>{
try {
const response=await this._request(
"DELETE",
"/api/projects",
{
name:project,
},
);
}catch (error){
return reject(error);
}
resolve();
});
}
}
module.exports={
Theme,
DARK_THEME,
LIGHT_THEME,
BLUE_THEME,
GREEN_THEME,
Config,
Client,
Meta,
version:require(`./.version.js`),
}
