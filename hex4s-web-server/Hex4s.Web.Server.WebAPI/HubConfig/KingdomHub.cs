using Microsoft.AspNetCore.SignalR;

namespace Hex4s.Web.Server.WebAPI.HubConfig
{
    public class KingdomHub : Hub
    {
        public async Task NewKingdom(string name, string color)
        {
            await Clients.All.SendAsync("NewKingdom", name, color);
        }
    }
}
