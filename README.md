READ

** LOGIN INFORMATION (username/password): <p>User: user / 123456</p>  <p>Admin: admin / 123456</p> <p>**SETTING</p>

You need to run it locally by following these steps:

1. Download and install Xampp (choose the version with PHP 8.1): https://www.apachefriends.org/download.html (for MacOS, your can  use MAMP to replace)
2. Open Xampp and start Apache & MySQL
3. In your browser go to http://localhost/phpmyadmin and create a new database with collation utf8mb4_unicode_ci then import the attached .sql file (optional)
4. Download the source code and open it on your IDE (such as using Visual Studio application(https://visualstudio.microsoft.com/fr/) or Rider(https://www.jetbrains.com/rider/)
5. Open the editor, set up and download the required libraries in the next step
6. You must create namespace Properties
7. Open the terminal you need to run command:<p>cd Properties</p>and after that continue run<p> cp .launchSettings.example.json launchSettings.json </p> to to create a new launchSettings.json file and replace @project-name with your project-name
8. At the new window terminal, you need to run command:<p> cp .appsettings.example.json appsettings.json </p>to create a new appsettings.json file needed
9. At the appsettings.json file, must make a connection to the database and set up more add variables and keys for the project environment 
10. Run the following commands:<p> dotnet tool install --global dotnet-ef </p><p> dotnet ef migrations add InitialCreate </p><p> dotnet ef database update </p> 
11. Launch the project