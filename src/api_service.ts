export default class ApiService {
  private host = "community-hacker-news-v1.p.rapidapi.com";
  private key = "5bdad8fe48msh16107553273c749p119f5djsna189a53080ef";

  async getTopStories(): Promise<object> {
    const response = await fetch(
      "https://community-hacker-news-v1.p.rapidapi.com/topstories.json?print=pretty",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": this.host,
          "x-rapidapi-key": this.key,
        },
      }
    );
    const data = await response.json();
    return data;
  }

  async getItem(itemId: number): Promise<object> {
    const response = await fetch(
      `https://community-hacker-news-v1.p.rapidapi.com/item/${itemId}.json?print=pretty`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-hacker-news-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "5bdad8fe48msh16107553273c749p119f5djsna189a53080ef",
        },
      }
    );
    const data = await response.json();
    return data;
  }
}
