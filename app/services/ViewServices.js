

class ViewServices {

  changeProjectsView() {
    const featuredBtn = document.getElementById('featured');
    const developmentBtn = document.getElementById('in-development');
    if (featuredBtn.classList.contains('projects-btn-active')) {
      featuredBtn.classList.remove('projects-btn-active');
      developmentBtn.classList.add('projects-btn-active');
    } else {
      featuredBtn.classList.add('projects-btn-active');
      developmentBtn.classList.remove('projects-btn-active');
    }
  }
}


export const viewServices = new ViewServices();