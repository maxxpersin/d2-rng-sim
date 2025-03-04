FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

ENV ASPNETCORE_URLS=http://+:80

FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG configuration=Release
WORKDIR /src
COPY ["server/server.csproj", "server/"]
RUN dotnet restore "server/server.csproj"
COPY . .
WORKDIR "/src/server"
RUN dotnet build "server.csproj" -c $configuration -o /app/build

FROM build AS publish
ARG configuration=Release
RUN dotnet publish "server.csproj" -c $configuration -o /app/publish /p:UseAppHost=false

# Build Angular app
FROM node:18 AS node-build
WORKDIR /client
COPY ["client/package.json", "client/package-lock.json", "./"]
RUN npm install
COPY client/ .
RUN npm run build --prod

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=node-build /client/dist /app/wwwroot
COPY wwwroot /app/wwwroot
ENTRYPOINT ["dotnet", "server.dll"]