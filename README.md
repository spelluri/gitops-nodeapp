# gitops-nodeapp 🚀

A production-ready Node.js microservice demonstrating 
GitOps principles with ArgoCD on Kubernetes.

## 🏗️ Architecture

\```
GitHub → ArgoCD → Kubernetes (k3s on Raspberry Pi)
\```

## 🌍 Environments

| Environment | Replicas | Resources |
|-------------|----------|-----------|
| Development | 1        | Low       |
| Staging     | 2        | Medium    |
| Production  | 3        | High      |

## 🛠️ Tech Stack

- **Runtime**: Node.js 18 (Alpine)
- **Container**: Docker (ARM64)
- **Orchestration**: Kubernetes (k3s)
- **GitOps**: ArgoCD v3.4.2
- **Config Management**: Kustomize
- **Hardware**: Raspberry Pi Cluster

## 🚀 API Endpoints

| Endpoint  | Description          |
|-----------|----------------------|
| `GET /`   | App info + hostname  |
| `GET /health` | Health check    |

## 📦 GitOps Repository

Kubernetes manifests managed at:
[argocd-apps](https://github.com/spelluri/argocd-apps)

## 🏠 Infrastructure

Running on a 3-node Raspberry Pi cluster:
- pelluri-berrypi1 (control-plane, 8GB RAM)
- pelluri-berrypi2 (worker, 4GB RAM)
- pelluri-berrypi3 (worker, 4GB RAM)

## 📚 Learning Resources

This project is part of my ArgoCD learning journey.
Topics covered:
- [x] GitOps concepts
- [x] ArgoCD installation & setup
- [x] App of Apps pattern
- [x] Sync policies
- [x] Helm & Kustomize
- [ ] RBAC & Multi-tenancy
- [ ] ApplicationSets
- [ ] Secrets management
- [ ] CI/CD integration
