namespace Models
{
    public class ResponseModel<T>
    {   
        public T? Dados { get; set; }
        public String Mensagem { get; set; } = string.Empty;
        public bool status { get; set; } = true;
    }
}