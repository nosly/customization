::2016.07.14

@echo off
::最小化运行批处理
::From: https://blog.csdn.net/jlminghui/article/details/42214255
%1 %2 
start /min /i "" "%~nx0" goto min&&goto :eof

::設置程序文件夾位置
set dir=D:\Program Files

::家里用


::完成後退出
exit