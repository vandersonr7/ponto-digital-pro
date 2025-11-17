import React, { useState, useEffect } from 'react';

interface Task {
  id: string;
  title: string;
  status: 'pending' | 'in_progress' | 'completed';
  date: string;
  hours: number;
}

interface Project {
  id: string;
  name: string;
  tasks: Task[];
}

export default function App() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'Ponto Digital Pro',
      tasks: [
        { id: '1', title: 'Integração Supabase', status: 'completed', date: '2025-11-17', hours: 8 },
        { id: '2', title: 'Deploy Vercel', status: 'in_progress', date: '2025-11-17', hours: 4 },
      ]
    }
  ]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0]);

  const getTotalHours = () => {
    return selectedProject?.tasks.reduce((sum, task) => sum + task.hours, 0) || 0;
  };

  const getTasksByStatus = (status: string) => {
    return selectedProject?.tasks.filter(t => t.status === status) || [];
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#2563eb', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h1 style={{ margin: '0 0 10px 0' }}>Ponto Digital Pro</h1>
        <p style={{ margin: 0 }}>Sistema de Gerenciamento de Horas e Projetos</p>
      </div>

      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '20px' }}>
        {/* Sidebar */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', height: 'fit-content' }}>
          <h3 style={{ marginTop: 0 }}>Projetos</h3>
          {projects.map(project => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '8px',
                backgroundColor: selectedProject?.id === project.id ? '#2563eb' : '#e5e7eb',
                color: selectedProject?.id === project.id ? 'white' : 'black',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              {project.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {selectedProject && (
            <>
              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '20px' }}>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#666' }}>Total de Horas</h4>
                  <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>{getTotalHours()} horas</p>
                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#666' }}>Tarefas em Progresso</h4>
                  <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>{getTasksByStatus('in_progress').length}</p>
                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#666' }}>Concluídas</h4>
                  <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>{getTasksByStatus('completed').length}</p>
                </div>
              </div>

              {/* Tasks */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ marginTop: 0 }}>Tarefas do Projeto</h3>
                {selectedProject.tasks.length === 0 ? (
                  <p style={{ color: '#999' }}>Nenhuma tarefa cadastrada</p>
                ) : (
                  <div>
                    {selectedProject.tasks.map(task => (
                      <div key={task.id} style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '12px', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <h4 style={{ margin: '0 0 5px 0' }}>{task.title}</h4>
                            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                              {task.date} • {task.hours}h
                            </p>
                          </div>
                          <span style={{
                            padding: '5px 10px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            backgroundColor: task.status === 'completed' ? '#d1fae5' : task.status === 'in_progress' ? '#fef3c7' : '#f3f4f6',
                            color: task.status === 'completed' ? '#065f46' : task.status === 'in_progress' ? '#92400e' : '#374151'
                          }}>
                            {task.status === 'completed' ? 'Concluída' : task.status === 'in_progress' ? 'Em Progresso' : 'Pendente'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '40px', textAlign: 'center', color: '#999', fontSize: '14px' }}>
        <p>Ponto Digital Pro • Sistema de Gerenciamento de Horas</p>
      </div>
    </div>
  );
}
