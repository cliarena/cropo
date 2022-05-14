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
# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends fish watchman gnupg2 libnss3-tools

RUN curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/arm64"
RUN chmod +x mkcert-v*-linux-arm64
RUN sudo cp mkcert-v*-linux-arm64 /usr/local/bin/mkcert



RUN sh -c "$(curl -fsSL https://starship.rs/install.sh)" -y -f

ENV HOME /home/node
RUN fish
RUN echo "starship init fish | source" >> ~/.config/fish/config.fish
RUN echo "set fish_greeting" >> ~/.config/fish/config.fish
USER node
# Npm Check Updates
RUN npm install -g pnpm npm-check-updates snyk

