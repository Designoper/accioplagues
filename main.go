package main

import "github.com/webview/webview"

func main() {
	w := webview.New(true)
	defer w.Destroy()
	w.SetTitle("Mi Aplicación Web")
	w.SetSize(800, 600, webview.HintNone)
	w.Navigate("file://" + "./index.html")
	w.Run()
}
