using Microsoft.AspNetCore.SignalR;

namespace Hex4s.Web.Server.WebAPI.HubConfig
{
    public class KingdomHub : Hub
    {
        public async Task GetKingdom(string user, string message, string myProjectId, string myProjectVal)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message, myProjectId, myProjectVal);
        }
    }
}
