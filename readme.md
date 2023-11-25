# Cockpit Multi-Terminal

## Installation

```
cd $(mktemp -d) && \
wget -O - https://api.github.com/repos/bitfexl/cockpit-multi-terminal/tarball/ | tar -xz && \
mkdir -p ~/.local/share/cockpit && \
mv $(ls) ~/.local/share/cockpit/multi-terminal && \
cd ~
```

## Sources

https://cockpit-project.org/guide/latest/development

https://github.com/cockpit-project/cockpit/tree/main/examples/pinger

https://cockpit-project.org/guide/latest/api-terminal-html.html
