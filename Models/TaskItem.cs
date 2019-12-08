using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,
///porque Task es una palabra Reservada de.NetCore
/// </Summary>
///
namespace TaskSharpHTTP.Models
{
    public class TaskItem
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("description")]
        public string Description { get; set; }
        [JsonProperty("priority")]
        public bool Priority { get; set; }
    }
}