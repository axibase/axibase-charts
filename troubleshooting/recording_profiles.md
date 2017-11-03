# Portal Performance Diagnostics

## Overview

The following instructions outline steps required to record JavaScript timelines and resource usage in ATSD portals.

## Google Chrome

### Capturing Performance Profile

Open an ATSD portal

Click F12 on Windows or Command+Option+I on Mac to open Developer Tools

Open Performance panel

![](images/performance_panel.png)

Click on Record circle icon  ![](images/record_button.png)  in the top left bar to initiate a profiling session

Execute steps (load page, open dialog chart, click on controls) that cause performance issues

Click 'Stop' button to discontinue recording the session

Click on Arrow-Down icon  ![](images/arrow-down_saving_button.png)  in the top toolbar to Save Profile to a json file


### Capturing Memory Profile

Open an ATSD portal

Click F12 on Windows or Command+Option+I on Mac to open Developer Tools

Open Memory panel

![](images/memory_panel.png)

Choose "Record allocation timeline" radio-button.

Click "Start" button.

Execute steps (load page, open dialog chart, click on controls) that cause performance issues

Click on red Record circle icon  ![](images/red_record_button.png)  to discontinue recording the session

Click on "Save" to Save Profile to a heaptimeline file

![](images/memory_profile_save.png)