# DEPLOY REQUIREMENTS

🚀
<br>

> Deploy requirements for IH-IT software
> <br>

## App Template

    - Quasar

## System

    - Windows

## Environment

    - Dev

## ANSIBLE RECIPE NAME

_Development_

    - Deploy QuasarTemplate.App - DEV

## App folder

    QuasarTemplate.App

## Distribution

    - Compilation

## Settings site

    - feature_net45: 'no'
    - net_core: 'no'
    - core_version: 'no'
    - httpplatform: 'no'
    - managedRuntimeVersion_pool: 'no managed'
    - enable32BitAppOnWin64_pool: 'false'
    - managedPipeLineMode_pool: 'integrated'
    - iiswin_aut: 'no'
    - thredds_whitelist: 'no'

## LOG

## Url GIT

    - ssh  git@github.com:IHCantabria/QuasarTemplate.App.git

## DNS

_Development_

    - quasardemodev.ihcantabria.com

## URL APPLICATION

_Development_

    - quasardemodev.ihcantabria.com

## COMPILATION SCRIPT PROFILES

El Fichero package.json tiene los scripts de compilación.

_Development_

    - npm run build:dev:pwa

## Other settings

Select only if needed:

**Binary repo**

`_____________`

**Services to restart**

`_____________`

**Backup**

    - Tags
    - Snapshot

---

**Do you need any other configuration?**

<br>

## Relationships

**What applications, services, or data sources is this application related to?**

Ninguna

## Credits

[IH Cantabria](https://github.com/IHCantabria)

## FAQ

- Document provided by the system administrators [David del Prado](https://ihcantabria.com/directorio-personal/david-del-prado-secadas/)
