# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2026-09-22

### Changed

- Update `next` to 16.3.6, `react`/`react-dom` to 19.3.0, `react-toastify` to 11.1.0, and dev dependencies to their latest compatible versions
- Bump GitHub Actions (`actions/checkout`, `actions/setup-node`, `pnpm/action-setup`) to their latest major versions
- Switch Dependabot update schedule from weekly to monthly

### Fixed

- Resolve critical and high-severity `next` security advisories
- Resolve `flatted` prototype-pollution and `deepmerge-ts` stack-exhaustion advisories

## [1.1.0] - 2026-03-13

### Added

- Add Primary, Secondary, Accent, Highlight color themes

## [1.0.0] - 2026-03-11

### Added

- Initial template release
- Playthrough management (create, edit, delete, switch)
- localStorage persistence via `storageService`
- `PlaythroughContext` and `UIContext`
- Settings page with export, import, and reset
- Sidebar with playthrough switcher and dark mode toggle
- Create, Edit, and Delete playthrough modals
- Toast notification helpers (success, error, info, warning)
- URL query param service (`urlService`)
- `SaveFAB` opt-in floating save button
- Home/landing page scaffold
- Playthrough list page with search and sort
- GitHub Actions CI (lint + build) and Deploy workflows
- Dependabot dependency update configuration
