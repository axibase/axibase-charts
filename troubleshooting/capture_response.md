# Capture Response

## Overview

The following instructions outline steps required to record network response in ATSD portals for a particular widget.

## Google Chrome

- Open an ATSD portal.

- Click `F12` on Windows or `Command+Option+I` on Mac to open Developer Tools.

- Open the **Network** panel.

  ![](images/network_panel.png)

- Click on `Clear` icon  ![](images/clear_button.png)  in the toolbar to clear the request history.

- Click on the widget header. The dialog mode will initiate a request into ATSD to load data for the selected widget.

  ![](images/response_received.png)

- Right-click on the request row. Select **Copy > Copy Response** option.

- Save the request output into a file such as `widget_xyz_response.json`.

  ![](images/copy_response.png)

## Internet Explorer

- Open an ATSD portal.

- Click `F12` to open Developer Tools.

- Open the **Network** panel by `Control+4` .

  ![](images/network_panel_ie.png)

- Enable network traffic capturing by `F5`.

  ![](images/enable_traffic_capturing_ie.png)

- Click on the widget header. The dialog mode will initiate a request into ATSD to load data for the selected widget.

  ![](images/response_received_ie.png)

- Double click on the request row. Select **Response body** tab.

  ![](images/open_details_ie.png)

- Save the request output into a file such as `widget_xyz_response.json`.

  ![](images/copy_response_ie.png)
