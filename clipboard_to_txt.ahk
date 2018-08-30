#NoEnv
#Persistent
#SingleInstance

OnClipboardChange:
  FileAppend, % Clipboard "`n", DeezerPlaylists.txt
return