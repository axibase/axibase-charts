# Capture Response

## Overview

The following instructions outline steps required to record network responses in ATSD portals.

## Google Chrome

Open an ATSD portal.

Open Developer Tools, open the Network panel.

![](images/network_panel.png)

Clear request history by clicking on the Clear icon  ![](images/clear_button.png)  in the toolbar.

Click on widget header. The widget will open in dialog mode which will trigger a request to ATSD to load data specifically for this widget.

![](images/response_received.png)

Right click on request row, select option Copy > Copy response and save the output into a file such as widget_xyz_response.json

![](images/copy_response.png)


