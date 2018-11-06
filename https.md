# 使用阿里云提供的API自动添加TXT记录完成验证

- export Ali_Key="LTAIKSu8bfWhp2Sl"
- export Ali_Secret="3mTHzapS3LrZD95LM7YEYVN1jrv8Ts"
- acme.sh --issue --dns dns_ali -d webman.vip -d www.webman.vip -d blog.webman.vip

# 安装证书到其它位置

acme.sh --installcert -d domain.com  [--ecc] [--certpath cert-file-path]  [--keypath key-file-path]  [--capath ca-cert-file-path]   [ --reloadCmd reloadCmd] [--fullchainpath fullchain-path]

# 查看所有证书

acme.sh --list

# 更新证书（强制）

acme.sh --renew -f -d imzhi.me 

# 撤销证书

acme.sh --revoke -d tool.imzhi.me