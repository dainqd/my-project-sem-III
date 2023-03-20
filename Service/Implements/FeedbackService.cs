using AutoMapper;
using myProject.Config;
using myProject.Context;
using myProject.Dtos.Feedback;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class FeedbackService : IFeedbackService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;
    
    public FeedbackService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public IEnumerable<Feedbacks> GetAll()
    {
        return _context.Feedbacks;
    }

    public IEnumerable<Feedbacks> GetAllByStatus(Enums.FeedbackStatus status)
    {
        var newstatus = status;
        if (newstatus == null || status == Enums.FeedbackStatus.DELETED)
        {
            newstatus = Enums.FeedbackStatus.PENDING;
        }
        return _context.Feedbacks.Where(v => v.status == newstatus).ToList();
    }

    public Feedbacks GetById(int id)
    {
        return getFeedback(id);
    }

    public void Delete(int id)
    {
        var feedback = getFeedback(id);
        feedback.status = Enums.FeedbackStatus.DELETED;
        feedback.DeletedAt = DateTimeOffset.Now.AddHours(7);
        _context.Feedbacks.Update(feedback);
        _context.SaveChanges();
    }

    public void Create(CreateFeedbackRequest model)
    {
        var feedback  = _mapper.Map<Feedbacks>(model);

        if (model.fullname == null)
        {
            throw new AppException("Name invalid!");
        }
        
        if (model.message == null)
        {
            throw new AppException("Message invalid!");
        }
        
        feedback.CreatedAt = DateTimeOffset.Now.AddHours(7);

        _context.Feedbacks.Add(feedback);
        _context.SaveChanges();
    }
    
    public void Update(int id, Enums.FeedbackStatus status)
    {
        var feedback = getFeedback(id);

        if (status == null || status == Enums.FeedbackStatus.DELETED)
        {
            throw new AppException("Status invalid!");   
        }

        feedback.status = status;
        feedback.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        
        _context.Feedbacks.Update(feedback);
        _context.SaveChanges();
    }
    
    private Feedbacks getFeedback(int id)
    {
        var feedback = _context.Feedbacks.Find(id);
        if (feedback == null || feedback.status == Enums.FeedbackStatus.DELETED)
        {
            throw new KeyNotFoundException("Feedback not found");
        }
        return feedback;
    }
}