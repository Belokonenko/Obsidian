The [Releases](https://github.com/neovim/neovim/releases) page provides pre-built binaries for Linux systems.

```shell
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux64.tar.gz
sudo rm -rf /opt/nvim
sudo tar -C /opt -xzf nvim-linux64.tar.gz
```

After this step add this to `~/.bashrc`:

dobav v konec faila
```
export PATH="$PATH:/opt/nvim-linux64/bin"
```

```shell
source ~/.bashrc
```
