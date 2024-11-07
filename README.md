# Hallucinator

Upload an audio clip and let the AI autocomplete the rest. Powered by [hertz](https://github.com/Standard-Intelligence/hertz-dev) from Standard Intelligence.

# Credits

This project is a slight modification of the official [hertz-dev](https://github.com/Standard-Intelligence/hertz-dev) project. Changes made:

1. **app.py:** added a gradio web ui for audio autocompletion
2. **transformer.py:** Use `SDPBackend.EFFICIENT_ATTENTION` instead of `SDPBackend.FLASH_ATTENTION` because installing flash attention takes too long and we might be dead by the time it finishes installing.


# Install

## 1. One Click Install

You can install it with one click on https://pinokio.computer

## 2. Manual Install

Install pytorch

```
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
```

instal dependencies

```
pip install -r requirements.txt
```

## Run

```
python app.py
```
