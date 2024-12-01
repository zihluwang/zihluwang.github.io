# Hostname on Mac Terminal displayed as 10, 172 or 192

照理來說，Mac 中的終端開頭在預設情況下應顯示為 `yourname@computer-name`，但經常會變成 10、172 或 192 的情況。這是因為當你沒有設定電腦的主機名稱時，會自動使用 DNS 或 DHCP 的名稱來作為電腦的主機名稱。解決這個問題有兩種處理方法。
1. 使用公共 DNS 服務。在 Mac 的網路設定中使用公網中的 DNS 位址即可解決問題。
2. 如果你是開發人員，需要自訂一些 DNS 解析策略，可以採用下面的指令來解決這個問題：
   ```shell
   sudo scutil --set HostName $your_preferred_host_name
   ```