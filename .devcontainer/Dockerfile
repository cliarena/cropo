# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.224.2/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN su node -c "npm install -g <your-package-list -here>"

# Fish
RUN echo 'deb http://download.opensuse.org/repositories/shells:/fish:/release:/3/Debian_11/ /' | sudo tee /etc/apt/sources.list.d/shells:fish:release:3.list
RUN curl -fsSL https://download.opensuse.org/repositories/shells:fish:release:3/Debian_11/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/shells_fish_release_3.gpg > /dev/null
# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends fish 
RUN apt-get update && apt-get install gnupg2 -y



# RUN sh -c "$(curl -fsSL https://starship.rs/install.sh)" --yes

# RUN curl -s https://api.github.com/repos/starship/starship/releases/latest \
#     | grep browser_download_url \
#     # | grep x86_64-unknown-linux-gnu \
#     | grep aarch64-unknown-linux-musl\
#     | cut -d '"' -f 4 \
#     | wget -qi -
# RUN tar xvf starship-*.tar.gz
# RUN ls -la
# RUN mv starship /usr/local/bin/

# RUN curl -sS https://starship.rs/install.sh | sh  --yes
RUN sh -c "$(curl -fsSL https://starship.rs/install.sh)" -y -f

ENV HOME /home/node
RUN fish
RUN echo "starship init fish | source" >> ~/.config/fish/config.fish
RUN echo "set fish_greeting" >> ~/.config/fish/config.fish
USER node
# RUN corepack enable
# Npm Check Updates
RUN npm install -g npm-check-updates




