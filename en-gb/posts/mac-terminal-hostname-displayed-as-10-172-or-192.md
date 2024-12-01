# Hostname on Mac Terminal displayed as 10, 172 or 192

Technically, the hostname in Mac Terminal should be `$your_computer_name`, but they often turn into `10`, `172` or `192` (aka the first part of private IPv4 address). This is because you didn't set a host name properly and Terminal uses your private IPv4 address. Here are 2 solutions for this problem.

1. Use public DNS service. You only have to set your DNS to public DNS server such as `1.1.1.1`, `8.8.8.8` or something like that.
2. If you are a developer, who requires some customised DNS resolutions, you can use the following commands to solve this:
   ```shell
   sudo scutil --set HostName $your_preferred_host_name
   ```