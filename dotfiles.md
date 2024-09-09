# Wezterm config
file: ´~/.config/.wezterm.lua´


´´´lua
local wezterm = require("wezterm")

local config = wezterm.config_builder()

config = {
  automatically_reload_config = true,
  -- enable_tab_bar = false,
  -- window_close_confirmation = "NeverPrompt",
  window_decorations = "RESIZE",
  color_scheme = "Catppuccin Mocha",
  font = wezterm.font("JetBrains Mono", { weight = "Light" }),
  font_size = 10.5,
  background = {
    {
      source = {
        -- File = "C:/Users/arand/Pictures/image-fantasy.png"
        File = "C:/Users/arand/Pictures/view-girl-anime.jpg"
      },
      hsb = {
        hue = 1.0,
        saturation = 1.02,
        -- brightness = 0.80
      },
      width= "100%",
      height= "100%"
    },
    {
      source = {
        -- Color = "#282c35"
        -- Color = "#2d3545"
        Color = "#252c3b"
      },
      width = "100%",
      height = "100%",
      opacity = 0.6
    }
  }
}

config.default_domain="WSL:kali-linux"


return config
´´´

# Helix editor config

´´´toml
# theme = "catppuccin_mocha"
theme = "custom_theme"

[editor]
mouse = false
line-number = "relative"
undercurl = true
bufferline = "always"
# cursorline = true
cursor-shape = { insert = "bar" }
true-color = true
idle-timeout = 200
color-modes = true

[editor.statusline]
separator = "|"
right = [
   "diagnostics",
   "selections",
   "position",
   "position-percentage",
   "file-encoding",
   "file-type"
]

[editor.lsp]
display-messages = true
# display-inlay-hints = true


[keys.normal]
"space" = { s = ":write", q = ":buffer-close" }

[keys.insert]
"j" = { k = "normal_mode" }
´´´
