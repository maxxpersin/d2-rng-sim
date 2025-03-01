namespace server.Models
{
    public class Application
    {
        public int applicationType;
        public int applicationId;
        public string name;
        public string redirectUrl;
        public string link;
        public int scope;
        public string origin;
        public int status;
        public DateTime creationDate;
        public DateTime statusChanged;
        public DateTime firstPublished;
        public List<string> team;
        public string overrideAuthorizeViewName;
    }
}
