using System;
using System.Collections.Generic;

namespace Noble_Nudge.Models;

public partial class User
{
    public int UserId { get; set; }

    public string? GoogleId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public int? Age { get; set; }

    public string? ZipCode { get; set; }

    public int? Points { get; set; }
}
