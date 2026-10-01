@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
echo Starting npm install...
call "C:\Program Files\nodejs\npm.cmd" install --no-audit --prefer-offline
echo npm install finished with code %ERRORLEVEL%
