# DEPLOY REQUIREMENTS

🚀
<br>

> Deploy requirements for IH-IT software
> <br>

## App Template

    - Release

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

    - Release

## Settings site

    - feature_net45: 'no'
    - net_core: 'no'
    - core_version: 'no'
    - httpplatform: 'no'
    - managedRuntimeVersion_pool: 'no managed'
    - enable32BitAppOnWin64_pool: 'false'
    - managedPipeLineMode_pool: 'integrated'
    - iiswin_aut: 'no'
    - thredds_whitelist: 'si'

## LOG

    - log: 'no'

## Url GIT

    - ssh  git@github.com:IHCantabria/QuasarTemplate.App.git

## DNS

_Development_

    - quasardemodev.ihcantabria.com

## URL APPLICATION

_Development_

    - quasardemodev.ihcantabria.com/path

## Other settings

Select only if needed:

**Binary repo**

`_____________`

**Services to restart**

`_____________`

**Backup**

    - Tags
    - Snapshot
    - Clone/Backup

---

**Do you need any other configuration?**

- app_name here must be equal to name property inside package.json
- Descargar Release: https://api.github.com/repos/IHCantabria/app_name/releases/tags/app_name-{{ version }}-{{ entorno }}.zip

<br>

## Relationships

**What applications, services, or data sources is this application related to?**

`_______________________________________________________________________________`

## Credits

[IH Cantabria](https://github.com/IHCantabria)

## FAQ

- Document provided by the system administrators [David del Prado](https://ihcantabria.com/directorio-personal/david-del-prado-secadas/) y [Luis Gutierrez](https://ihcantabria.com/directorio-personal/luis-gutierrez/)
