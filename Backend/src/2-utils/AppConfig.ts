class AppConfig {
    public connectionString = "mongodb://127.0.0.1:27017/Events"; // Fill in the blank (database name)...
    public port = 3001;
}

const appConfig = new AppConfig();

export default appConfig;
