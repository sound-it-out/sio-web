using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Net.Http.Headers;
using System;
using System.IO.Compression;

namespace SIO_Web
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddResponseCompression(options => options.EnableForHttps = true);
            services.Configure<GzipCompressionProviderOptions>(options => options.Level = CompressionLevel.Optimal);
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "app/dist";
            });
        }
        
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseResponseCompression();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();


            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "app/dist";

                spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
                {
                    OnPrepareResponse = ctx =>
                    {
                        if (ctx.Context.Request.Path.Value.EndsWith(".html"))
                        {
                            var headers = ctx.Context.Response.GetTypedHeaders();

                            headers.ETag = null;
                            headers.CacheControl = new CacheControlHeaderValue
                            {
                                NoCache = true,
                                NoStore = true,
                            };
                            headers.Expires = DateTimeOffset.UtcNow.AddDays(-1);
                        }
                    }
                };
            });
        }
    }
}
