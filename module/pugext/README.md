# pugext

這是個實驗性的模組. 因為在 src tree 外的 module 可能也會有 srctree, 也需要 build 甚至 i18n. 所以我們勢必要將我們擴充的 pug-extapi 給模組化.

不過, 如果我們直接將整個 srctree builder 搬出來, 就沒這個問題了. 所以這個模組最後可能就不需要了.
