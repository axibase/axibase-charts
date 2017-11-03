# Capture Response

## Overview

The following instructions outline steps required to record network response in ATSD portals for a particular widget.

## Google Chrome

- Open an ATSD portal.

- Click `F12` on Windows or `Command+Option+I` on Mac to open Developer Tools.

- Open the **Network** panel.

  ![](images/network_panel.png)

- Click on `Clear` icon  ![](images/clear_button.png)  in the toolbar to clear the request history.

- Click on the widget header. The widget will open in dialog mode which will trigger a request to ATSD to load data specifically for this widget.

  ![](images/response_received.png)

- Right click on the request row. Select option **Copy > Copy Response**.

- Save copied output into a file such as `widget_xyz_response.json`.

  ![](images/copy_response.png)


