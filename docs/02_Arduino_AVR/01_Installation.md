---
sidebar_position: 2
---

# Installation

Steps and software need to code, compile is elaborated here.

# Source

[https://arduino.sincgrid.com/docs/build/html/files/lecture2/index.html](https://arduino.sincgrid.com/docs/build/html/files/lecture2/index.html)



## Arduino IDE

- **Free and Open-source**
- **Easy-to-use**
- **Compatible** 
- **Easy-to-understand**
- **Reliable**

## Download
- To download the Arduino IDE, open url `<https://www.arduino.cc/en/Main/Software>`_.
- Now select the download file based on your operating system.
![](img/lecture2_pg3.JPG)
    
![](img/lecture2_pg4.JPG)
    
## Installations 

### Installation (Windows)

- Now click on the downloaded file to start the installation.
![](img/lecture2_pg5.JPG)
    
- Now accept the license agreement by clicking on I Agree button.
![](img/lecture2_pg6.JPG)
    
- Click on Next to install various components of Arduino IDE Setup.
![](img/lecture2_pg7.JPG)
    
- Now select the directory for installation and click Install button. 
![](img/lecture2_pg8.JPG)
    
- The following dialogue box appears, click Close after the installation is completed.
![](img/lecture2_pg9.JPG)
    
- If the drivers are not pre-installed on your desktop, then a series of driver installation dialog box will appear. Click Install to install the necessary drivers.
![](img/lecture2_pg10.JPG)
    
- The installation has been completed. 
- Now click on the desktop icon to start the Arduino IDE.
![](img/lecture2_pg11.JPG)
    

### Installation (Linux)

- Extract the downloaded package. 
![](img/lecture2_pg12.JPG)
    
- In the extracted folder, find the install.sh file.
- Right click on it and chose the Run in Terminal from contextual menu.
![](img/lecture2_pg13.JPG)
    
- If you can’t find the Run in Terminal option from contextual menu, then open Terminal and navigate to the extracted folder
- Type the command ./install.sh and wait for the process to finish
- Now, the Arduino IDE has been installed
![](img/lecture2_pg14.JPG)
    
- It might be the case that you would not be able to upload the sketch because of serial port permission. The corresponding error message is **”Error connecting to Serial Port”**
- To set the permission, open Terminal and type ** ls -l /dev/ttyACM* **
- The data we need is ‘dialout’(this is the group owner of the file)
- Now we need to add our user to that group with the help of the following command  ** sudo usermod -a -G dialout < username > **
![](img/lecture2_pg15.JPG)
    

### Installation (Mac OS X)

- Extract the downloaded package. 
![](img/lecture2_pg16.JPG)
    
- Copy the Arduino application into the Applications folder or any other location. 
![](img/lecture2_pg17.JPG)
    
- The installation has been completed. 
- Now click on the Arduino icon to start the Arduino IDE.
![](img/lecture2_pg18.JPG)
    

## User Interface
![](img/lecture2_pg19.JPG)
    
### File Tab and Edit Tab
![](img/lecture2_pg20.JPG)
    
### Sketch Tab and Tools Tab
![](img/lecture2_pg21.JPG)
    
### Meaning of Symbols-Verify
![](img/lecture2_pg22.JPG)
    
### Upload
![](img/lecture2_pg23.JPG)
    
### New
![](img/lecture2_pg24.JPG)
    
### Open
![](img/lecture2_pg25.JPG)
    
### Save
![](img/lecture2_pg26.JPG)
    
### Serial Monitor
![](img/lecture2_pg27.JPG)
    
## Functions
![](img/lecture2_pg28.JPG)
    