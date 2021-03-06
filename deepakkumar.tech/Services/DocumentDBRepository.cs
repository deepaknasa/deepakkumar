namespace deepakkumar.tech.Services
{
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Linq.Expressions;
  using System.Threading.Tasks;
  using Microsoft.Azure.Documents;
  using Microsoft.Azure.Documents.Client;
  using Microsoft.Azure.Documents.Linq;
  using Microsoft.Extensions.Configuration;

  public static class DocumentDBRepository<T> where T : class
  {

    //private static readonly string Endpoint = "https://localhost:8081";
    //private static readonly string Key = "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";
    private static readonly string DatabaseId = "DeepakKumarTech";
    private static readonly string CollectionId = "ProfileData";
    private static DocumentClient client;

    public static async Task<T> GetProfileDataAsync()
    {
      IDocumentQuery<T> query = client.CreateDocumentQuery<T>(
          UriFactory.CreateDocumentCollectionUri(DatabaseId, CollectionId),
          new FeedOptions { MaxItemCount = -1 })
          //.Where(predicate)
          .AsDocumentQuery();

      List<T> results = new List<T>();
      while (query.HasMoreResults)
      {
        results.AddRange(await query.ExecuteNextAsync<T>());
      }

      return results.FirstOrDefault();
    }

    public static void Initialize(IConfigurationRoot config)
    {
      var authKey = config.GetValue<string>("authKey");
      var endpoint = config.GetValue<string>("endpoint");
      client = new DocumentClient(
        new Uri(endpoint),
        authKey);
      CreateDatabaseIfNotExistsAsync().Wait();
      CreateCollectionIfNotExistsAsync().Wait();
    }

    private static async Task CreateDatabaseIfNotExistsAsync()
    {
      try
      {
        await client.ReadDatabaseAsync(UriFactory.CreateDatabaseUri(DatabaseId));
      }
      catch (DocumentClientException e)
      {
        if (e.StatusCode == System.Net.HttpStatusCode.NotFound)
        {
          await client.CreateDatabaseAsync(new Database { Id = DatabaseId });
        }
        else
        {
          throw;
        }
      }
    }

    private static async Task CreateCollectionIfNotExistsAsync()
    {
      try
      {
        await client.ReadDocumentCollectionAsync(UriFactory.CreateDocumentCollectionUri(DatabaseId, CollectionId));
      }
      catch (DocumentClientException e)
      {
        if (e.StatusCode == System.Net.HttpStatusCode.NotFound)
        {
          await client.CreateDocumentCollectionAsync(
              UriFactory.CreateDatabaseUri(DatabaseId),
              new DocumentCollection { Id = CollectionId },
              new RequestOptions { OfferThroughput = 400 });
        }
        else
        {
          throw;
        }
      }
    }

    public static async Task<Document> CreateProfileDataAsync(T item)
    {
      return await client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri(DatabaseId, CollectionId), item);
    }

    public static async Task<Document> UpdateProfileDataAsync(string id, T item)
    {
      return await client.ReplaceDocumentAsync(UriFactory.CreateDocumentUri(DatabaseId, CollectionId, id), item);
    }

    public static async Task DeleteProfileDataAsync(string id)
    {
      await client.DeleteDocumentAsync(UriFactory.CreateDocumentUri(DatabaseId, CollectionId, id));
    }
  }
}
