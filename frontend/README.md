# frontend folder

this folder is for frontend source, downloaded library and generated files. you can use it as the root directory, or use a subfolder such as `demo` for your frontend root, but be sure to add the corresponding name ( e.g., `frontend/something` or `frontend` ) in `config/private/secret.ls` so `servebase` can recognize the path you use.

Additionally, please check `demo` for how files are organized. `demo` itself serves as a sub-package with its own dependencies thus won't mess up with the desired dependencies in your project.
