module.exports = {
  run: [
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        message: [
          "pip install -r requirements.txt",
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "env"
      }
    }
  ]
}
