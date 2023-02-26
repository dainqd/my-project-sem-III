READ

** LOGIN INFORMATION (username/password):

User: user / 123456
Admin: admin / 123456
**SETTING

You need to run it locally by following these steps:

1. Download and install Xampp (choose the version with PHP 8.1): https://www.apachefriends.org/download.html (for MacOS, your can  use MAMP to replace)
2. Open Xampp and start Apache & MySQL
3. In your browser go to http://localhost/phpmyadmin and create a new database with collation utf8mb4_unicode_ci then import the attached .sql file (optional)
4. Download the source code and open it on your IDE (such as using Visual Studio application(https://visualstudio.microsoft.com/fr/) or Rider(https://www.jetbrains.com/rider/)
5. Open the editor, set up and download the required libraries in the next step
6. At the terminal, you need to run command:<p> cp .appsettings.example.json appsettings.json </p>to create a new appsettings.json file needed
7. At the appsetting.json file, must make a connection to the database and set up more add variables and keys for the project environment 
8. Run the following commands:<p> dotnet tool install --global dotnet-ef </p><p> dotnet ef migrations add InitialCreate </p><p> dotnet ef database update </p> 
9. Launch the project