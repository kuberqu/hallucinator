# Hallucinator

**[NVIDIA ONLY]** Upload an audio clip and let the AI autocomplete the rest. Powered by [hertz](https://github.com/Standard-Intelligence/hertz-dev) from Standard Intelligence.

> See this thread from Standard Intelligence to learn what this model is capable of: https://x.com/si_pbc/status/1853184307063660723


https://github.com/user-attachments/assets/13fe1e65-eafc-44bf-8d49-ed6ad7a0aaef


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
