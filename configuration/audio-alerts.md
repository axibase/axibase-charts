# Audio Alerts

## Overview

The `audio-alert` setting plays an audio file in the user's browser when an [`alert-expression`](../syntax/alert-expression.md) evaluates to `true`.

```ls
alert-expression = value > 70
audio-alert = siren.mp3
```

Audio is played each time when the result of the `alert-expression` expression changes from `false` to `true` or from `true` to `false`.

## Browser Settings

* Firefox: `media.autoplay.enabled` set to `true`.
* Chrome: `chrome://flags/#autoplay-policy`set to `No user gesture is required`.

## Supported Audio Codecs

| Browser           | `mp3` | `wav` | `ogg` |
|-------------------|-----|-----|-----|
| Chrome            | Yes | Yes | Yes |
| Firefox           | Yes | Yes | Yes |
| Safari            | Yes | Yes | No  |
| Internet Explorer | Yes | No  | No  |

## Test

To test if your browser supports auto-playback, open this [example](https://apps.axibase.com/chartlab/7509393e).

## Scope

* `audio-alert` setting is supported in widgets that support the [`alert-expression`](../widgets/shared/README.md#alert-expression) setting.

## File Path

The path to the audio file can be specified as an absolute or relative path.

Relative path must start with `/portal/resource/` and the file must be present in the `/opt/atsd/atsd/conf/portal` directory on the target ATSD server.

Mapping example:

```txt
/portal/resource/alarm.ogg -> /opt/atsd/atsd/conf/portal/alarm.ogg
```

## Sample Sounds

Download the following sample `mp3` files to the `/opt/atsd/atsd/conf/portal` directory on the ATSD server.

* [`alarm.mp3`](https://apps.axibase.com/chartlab/portal/alarm.mp3)
* [`bell.mp3`](https://apps.axibase.com/chartlab/portal/bell.mp3)
* [`bicycle.mp3`](https://apps.axibase.com/chartlab/portal/bicycle.mp3)
* [`dial.mp3`](https://apps.axibase.com/chartlab/portal/dial.mp3)
* [`down.mp3`](https://apps.axibase.com/chartlab/portal/down.mp3)
* [`siren.mp3`](https://apps.axibase.com/chartlab/portal/siren.mp3)
* [`up.mp3`](https://apps.axibase.com/chartlab/portal/up.mp3)

Refer to files as `/portal/resource/name-to-file.mp3`.

```ls
alert-expression = value > 50
audio-alert = /portal/resource/alarm.mp3
```

## Alert Expressions

### Alert on `false -> true`

```ls
alert-expression = value > 70
audio-alert = /portal/resource/siren.mp3
```

### Alert on `false -> true` and `true -> false`

```ls
# set alert-expression to 'value' so that it is always true
# choose which file to play using a ternary expression in audio-alert
alert-expression = value
audio-alert = (alert > 0.5) ? 'error.mp3': 'normal.mp3'
```

### ChartLab Example

[![](../images/button.png)](https://apps.axibase.com/chartlab/86d105c2/2/)

## Widget Settings

* The settings apply to the `[widget]` section.

Name | Description | &nbsp;
--|--|--
<a name="audio-alert"></a>[`audio-alert`](#audio-alert)| Path to audio file played when `alert-expression` evaluates to `true`.<br>**Example**: `audio-alert = /portal/resource/alarm.mp3` | [↗](https://apps.axibase.com/chartlab/86d105c2/2/)
<a name="audio-onload"></a>[`audio-onload`](#audio-onload) | Play audio on initial widget load if `alert-expression` is `true`.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `audio-onload = true`| [↗](https://apps.axibase.com/chartlab/7509393e)