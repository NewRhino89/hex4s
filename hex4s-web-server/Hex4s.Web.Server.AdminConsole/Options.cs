using CommandLine;

namespace Hex4s.Web.Server.AdminConsole
{
    internal class Options
    {
        [Option('c', "command", Required = true, HelpText = "Command to execute")]
        public string? Command { get; set; }
    }
}
