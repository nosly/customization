::2018.11.02

@echo off
::最小化运行批处理
::From: https://blog.csdn.net/jlminghui/article/details/42214255
%1 %2 
start /min /i "" "%~nx0" goto min&&goto :eof

::設置程序文件夾位置
set dir=D:\Program Files
set dir2=C:\Program Files (x86)

::公司用軟件
::start "" "%dir%\CloudHubX\CloudHubX.exe"
start "" "%dir%\Tencent\WeChat\WeChat.exe"


::完成後退出
exit
